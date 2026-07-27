import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-retro-server-chile');
}

export default function LumineraRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="luminera-retro-server-chile" />;
}
