import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-old-school-server-north-america');
}

export default function TibiaraOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-old-school-server-north-america" />;
}
