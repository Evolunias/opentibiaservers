import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-active');
}

export default function TfsServerActiveKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-active" />;
}
