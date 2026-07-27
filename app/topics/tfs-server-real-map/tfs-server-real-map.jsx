import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-real-map');
}

export default function TfsServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-real-map" />;
}
