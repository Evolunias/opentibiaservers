import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-fresh-start-server-chile');
}

export default function TibiantisFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-fresh-start-server-chile" />;
}
