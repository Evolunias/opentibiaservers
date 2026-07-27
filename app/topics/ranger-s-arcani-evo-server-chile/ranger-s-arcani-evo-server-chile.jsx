import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-evo-server-chile');
}

export default function RangerSArcaniEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-evo-server-chile" />;
}
