import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-high-exp-server-chile');
}

export default function CarlinotHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-high-exp-server-chile" />;
}
