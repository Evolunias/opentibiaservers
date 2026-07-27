import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-old-school-server-poland');
}

export default function TibiaraOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-old-school-server-poland" />;
}
