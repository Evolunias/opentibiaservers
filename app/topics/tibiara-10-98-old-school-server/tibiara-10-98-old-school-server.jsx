import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-98-old-school-server');
}

export default function Tibiara1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-98-old-school-server" />;
}
