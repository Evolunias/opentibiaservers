import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-old-school-server');
}

export default function Tibiara14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-old-school-server" />;
}
