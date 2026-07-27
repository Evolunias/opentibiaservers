import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-old-school-server-mexico');
}

export default function TibiaraOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-old-school-server-mexico" />;
}
