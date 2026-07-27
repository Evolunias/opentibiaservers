import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-high-exp-server-chile');
}

export default function HarmoniaOtHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-high-exp-server-chile" />;
}
