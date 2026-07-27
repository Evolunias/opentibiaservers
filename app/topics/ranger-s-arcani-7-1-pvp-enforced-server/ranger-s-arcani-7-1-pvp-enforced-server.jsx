import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-1-pvp-enforced-server');
}

export default function RangerSArcani71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-1-pvp-enforced-server" />;
}
