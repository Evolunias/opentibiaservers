import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-retro-server-chile');
}

export default function NepreniaRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-retro-server-chile" />;
}
