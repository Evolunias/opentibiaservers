import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-high-exp-server-chile');
}

export default function MidhemHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-high-exp-server-chile" />;
}
