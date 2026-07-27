import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-fresh-start-server-chile');
}

export default function NtoStarFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="nto-star-fresh-start-server-chile" />;
}
