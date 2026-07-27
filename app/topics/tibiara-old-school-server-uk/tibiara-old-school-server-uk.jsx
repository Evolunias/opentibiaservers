import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-old-school-server-uk');
}

export default function TibiaraOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-old-school-server-uk" />;
}
