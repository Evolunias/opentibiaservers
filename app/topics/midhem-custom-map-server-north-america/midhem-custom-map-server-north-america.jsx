import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-server-north-america');
}

export default function MidhemCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-server-north-america" />;
}
