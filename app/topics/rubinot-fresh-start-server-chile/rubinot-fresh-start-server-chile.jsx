import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-fresh-start-server-chile');
}

export default function RubinotFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-fresh-start-server-chile" />;
}
