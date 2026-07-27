import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-custom-map-server-poland');
}

export default function MidhemCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-custom-map-server-poland" />;
}
