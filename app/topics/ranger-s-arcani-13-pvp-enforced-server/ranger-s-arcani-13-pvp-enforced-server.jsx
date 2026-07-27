import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-13-pvp-enforced-server');
}

export default function RangerSArcani13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-13-pvp-enforced-server" />;
}
