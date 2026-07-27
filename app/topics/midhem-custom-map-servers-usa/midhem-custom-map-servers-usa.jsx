import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-servers-usa');
}

export default function MidhemCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-servers-usa" />;
}
