import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-retro-server-chile');
}

export default function HarmoniaOtRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-retro-server-chile" />;
}
