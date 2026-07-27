import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-low-exp-server-latin-america');
}

export default function VenoreotLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-low-exp-server-latin-america" />;
}
