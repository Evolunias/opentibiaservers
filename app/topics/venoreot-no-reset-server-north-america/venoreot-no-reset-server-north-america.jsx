import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-no-reset-server-north-america');
}

export default function VenoreotNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-no-reset-server-north-america" />;
}
