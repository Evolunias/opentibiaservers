import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-real-map-server-argentina');
}

export default function MidhemRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-real-map-server-argentina" />;
}
