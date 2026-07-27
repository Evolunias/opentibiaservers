import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-server-usa');
}

export default function MidhemCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-server-usa" />;
}
