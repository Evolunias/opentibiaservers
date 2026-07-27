import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-retro-server-chile');
}

export default function OriginaltibiaRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-retro-server-chile" />;
}
