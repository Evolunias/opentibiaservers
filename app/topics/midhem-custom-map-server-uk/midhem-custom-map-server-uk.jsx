import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-server-uk');
}

export default function MidhemCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-server-uk" />;
}
