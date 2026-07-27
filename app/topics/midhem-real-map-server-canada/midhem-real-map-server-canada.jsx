import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-server-canada');
}

export default function MidhemRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-server-canada" />;
}
