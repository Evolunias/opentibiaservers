import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-server-mexico');
}

export default function MidhemCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-server-mexico" />;
}
