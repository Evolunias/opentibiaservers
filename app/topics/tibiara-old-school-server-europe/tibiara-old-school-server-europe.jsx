import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-old-school-server-europe');
}

export default function TibiaraOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-old-school-server-europe" />;
}
