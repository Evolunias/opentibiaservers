import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp-enforced-server-france');
}

export default function RangerSArcaniPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp-enforced-server-france" />;
}
