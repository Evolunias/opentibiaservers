import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-old-school-server-latin-america');
}

export default function TibiaraOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-old-school-server-latin-america" />;
}
