import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-9-6-pvp-enforced-server');
}

export default function RangerSArcani96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-9-6-pvp-enforced-server" />;
}
