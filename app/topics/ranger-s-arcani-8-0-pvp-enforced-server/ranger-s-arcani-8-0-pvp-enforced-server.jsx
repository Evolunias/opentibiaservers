import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-0-pvp-enforced-server');
}

export default function RangerSArcani80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-0-pvp-enforced-server" />;
}
