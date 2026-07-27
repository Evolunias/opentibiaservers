import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-list');
}

export default function TfsServerListKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-list" />;
}
