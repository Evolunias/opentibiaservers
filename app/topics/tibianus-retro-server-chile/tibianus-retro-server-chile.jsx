import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-retro-server-chile');
}

export default function TibianusRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-retro-server-chile" />;
}
