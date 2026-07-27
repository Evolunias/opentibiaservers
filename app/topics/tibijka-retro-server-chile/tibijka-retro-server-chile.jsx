import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-retro-server-chile');
}

export default function TibijkaRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-retro-server-chile" />;
}
