import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-server-argentina');
}

export default function OlderaRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-server-argentina" />;
}
