import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-high-exp-server-chile');
}

export default function RubinotHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-high-exp-server-chile" />;
}
