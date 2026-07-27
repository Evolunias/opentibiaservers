import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp-enforced-server-usa');
}

export default function RangerSArcaniPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp-enforced-server-usa" />;
}
