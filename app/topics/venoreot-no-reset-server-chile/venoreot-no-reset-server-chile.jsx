import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-no-reset-server-chile');
}

export default function VenoreotNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="venoreot-no-reset-server-chile" />;
}
