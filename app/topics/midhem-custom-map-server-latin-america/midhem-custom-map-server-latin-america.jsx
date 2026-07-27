import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-server-latin-america');
}

export default function MidhemCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-server-latin-america" />;
}
