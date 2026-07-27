import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-brazil');
}

export default function TfsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-brazil" />;
}
