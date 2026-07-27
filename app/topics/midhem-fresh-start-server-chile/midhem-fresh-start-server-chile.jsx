import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-fresh-start-server-chile');
}

export default function MidhemFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-fresh-start-server-chile" />;
}
