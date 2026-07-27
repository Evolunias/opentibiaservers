import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-no-reset-server-chile');
}

export default function HarmoniaOtNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-no-reset-server-chile" />;
}
