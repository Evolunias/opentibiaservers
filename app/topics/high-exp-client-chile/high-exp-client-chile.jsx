import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-client-chile');
}

export default function HighExpClientChileKeywordPage() {
  return <StaticKeywordPage slug="high-exp-client-chile" />;
}
