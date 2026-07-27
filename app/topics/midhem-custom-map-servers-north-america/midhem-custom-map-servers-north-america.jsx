import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-servers-north-america');
}

export default function MidhemCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-servers-north-america" />;
}
