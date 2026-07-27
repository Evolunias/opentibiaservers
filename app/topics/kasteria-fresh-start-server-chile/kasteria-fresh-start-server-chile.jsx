import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-fresh-start-server-chile');
}

export default function KasteriaFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-fresh-start-server-chile" />;
}
