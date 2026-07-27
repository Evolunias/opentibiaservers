import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map');
}

export default function MidhemRealMapKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map" />;
}
