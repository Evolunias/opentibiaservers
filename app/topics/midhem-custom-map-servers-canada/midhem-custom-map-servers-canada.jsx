import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-servers-canada');
}

export default function MidhemCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-servers-canada" />;
}
