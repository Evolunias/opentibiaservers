import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-map');
}

export default function MidhemMapKeywordPage() {
  return <StaticKeywordPage slug="midhem-map" />;
}
