import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-servers-latin-america');
}

export default function MidhemCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-servers-latin-america" />;
}
