import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-servers-europe');
}

export default function MidhemCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-servers-europe" />;
}
