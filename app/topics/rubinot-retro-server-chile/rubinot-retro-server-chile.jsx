import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-retro-server-chile');
}

export default function RubinotRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-retro-server-chile" />;
}
