import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-no-reset-server-usa');
}

export default function VenoreotNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-no-reset-server-usa" />;
}
