import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-retro-server-chile');
}

export default function TibiascapeRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-retro-server-chile" />;
}
