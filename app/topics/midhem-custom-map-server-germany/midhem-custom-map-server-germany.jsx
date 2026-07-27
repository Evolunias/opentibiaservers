import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-server-germany');
}

export default function MidhemCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-server-germany" />;
}
