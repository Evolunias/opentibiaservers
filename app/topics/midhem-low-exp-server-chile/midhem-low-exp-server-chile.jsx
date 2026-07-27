import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-low-exp-server-chile');
}

export default function MidhemLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-low-exp-server-chile" />;
}
