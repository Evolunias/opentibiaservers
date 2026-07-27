import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-servers-argentina');
}

export default function OlderaRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-servers-argentina" />;
}
