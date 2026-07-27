import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-server-brazil');
}

export default function MidhemCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-server-brazil" />;
}
