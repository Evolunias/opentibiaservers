import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-servers-argentina');
}

export default function MidhemCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-servers-argentina" />;
}
