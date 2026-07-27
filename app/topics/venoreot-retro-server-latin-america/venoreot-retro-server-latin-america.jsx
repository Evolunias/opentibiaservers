import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-retro-server-latin-america');
}

export default function VenoreotRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-retro-server-latin-america" />;
}
