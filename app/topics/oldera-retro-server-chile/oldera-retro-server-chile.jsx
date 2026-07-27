import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-retro-server-chile');
}

export default function OlderaRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="oldera-retro-server-chile" />;
}
