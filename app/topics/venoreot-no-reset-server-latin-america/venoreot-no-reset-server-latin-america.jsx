import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-no-reset-server-latin-america');
}

export default function VenoreotNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-no-reset-server-latin-america" />;
}
