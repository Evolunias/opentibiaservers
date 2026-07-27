import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-retro-server-chile');
}

export default function CarlinotRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-retro-server-chile" />;
}
