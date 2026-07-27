import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-retro-server-chile');
}

export default function RangerSArcaniRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-retro-server-chile" />;
}
