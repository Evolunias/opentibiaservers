import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-retro-server-chile');
}

export default function CalmeraOtRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-retro-server-chile" />;
}
