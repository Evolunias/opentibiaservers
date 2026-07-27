import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-pvp-server-chile');
}

export default function TibianusPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-pvp-server-chile" />;
}
