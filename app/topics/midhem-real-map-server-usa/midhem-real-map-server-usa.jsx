import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-server-usa');
}

export default function MidhemRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-server-usa" />;
}
