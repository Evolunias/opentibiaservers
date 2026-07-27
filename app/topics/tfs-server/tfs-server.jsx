import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server');
}

export default function TfsServerKeywordPage() {
  return <StaticKeywordPage slug="tfs-server" />;
}
