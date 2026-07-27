import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-server-argentina');
}

export default function MidhemCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-server-argentina" />;
}
