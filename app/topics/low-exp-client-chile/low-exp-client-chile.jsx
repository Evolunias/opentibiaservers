import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-client-chile');
}

export default function LowExpClientChileKeywordPage() {
  return <StaticKeywordPage slug="low-exp-client-chile" />;
}
