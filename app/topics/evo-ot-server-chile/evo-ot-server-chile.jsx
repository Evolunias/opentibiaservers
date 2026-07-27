import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-ot-server-chile');
}

export default function EvoOtServerChileKeywordPage() {
  return <StaticKeywordPage slug="evo-ot-server-chile" />;
}
