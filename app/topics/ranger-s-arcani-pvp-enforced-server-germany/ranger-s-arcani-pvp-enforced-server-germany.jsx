import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp-enforced-server-germany');
}

export default function RangerSArcaniPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp-enforced-server-germany" />;
}
