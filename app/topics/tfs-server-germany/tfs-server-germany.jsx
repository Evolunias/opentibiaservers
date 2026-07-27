import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-germany');
}

export default function TfsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-germany" />;
}
