import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-old-school-server-germany');
}

export default function TibiaraOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-old-school-server-germany" />;
}
