import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-evo-server-south-america');
}

export default function RangerSArcaniEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-evo-server-south-america" />;
}
