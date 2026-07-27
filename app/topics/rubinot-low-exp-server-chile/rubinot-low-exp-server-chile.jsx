import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-low-exp-server-chile');
}

export default function RubinotLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-low-exp-server-chile" />;
}
