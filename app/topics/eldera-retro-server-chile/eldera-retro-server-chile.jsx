import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-retro-server-chile');
}

export default function ElderaRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="eldera-retro-server-chile" />;
}
