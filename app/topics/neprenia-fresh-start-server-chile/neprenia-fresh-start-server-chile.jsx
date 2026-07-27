import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-fresh-start-server-chile');
}

export default function NepreniaFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-fresh-start-server-chile" />;
}
