import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-retro-server-chile');
}

export default function RealeraRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="realera-retro-server-chile" />;
}
