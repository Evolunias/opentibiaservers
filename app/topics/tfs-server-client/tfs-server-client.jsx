import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-client');
}

export default function TfsServerClientKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-client" />;
}
