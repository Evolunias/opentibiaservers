import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-6-pvp-enforced-server');
}

export default function RangerSArcani76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-6-pvp-enforced-server" />;
}
