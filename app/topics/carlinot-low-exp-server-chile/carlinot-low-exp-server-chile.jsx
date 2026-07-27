import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-low-exp-server-chile');
}

export default function CarlinotLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-low-exp-server-chile" />;
}
