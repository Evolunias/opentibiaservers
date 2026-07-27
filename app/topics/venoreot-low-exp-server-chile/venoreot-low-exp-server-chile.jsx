import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-low-exp-server-chile');
}

export default function VenoreotLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="venoreot-low-exp-server-chile" />;
}
