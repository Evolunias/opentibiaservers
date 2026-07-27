import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-high-exp');
}

export default function TfsServerHighExpKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-high-exp" />;
}
