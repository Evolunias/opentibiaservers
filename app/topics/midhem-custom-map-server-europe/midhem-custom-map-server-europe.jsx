import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-server-europe');
}

export default function MidhemCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-server-europe" />;
}
