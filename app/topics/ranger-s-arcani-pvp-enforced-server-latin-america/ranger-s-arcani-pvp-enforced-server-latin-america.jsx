import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp-enforced-server-latin-america');
}

export default function RangerSArcaniPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp-enforced-server-latin-america" />;
}
