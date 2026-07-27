import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-retro-server-chile');
}

export default function MidhemRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-retro-server-chile" />;
}
