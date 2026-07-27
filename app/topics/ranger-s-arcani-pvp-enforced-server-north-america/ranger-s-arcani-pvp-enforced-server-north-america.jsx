import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp-enforced-server-north-america');
}

export default function RangerSArcaniPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp-enforced-server-north-america" />;
}
