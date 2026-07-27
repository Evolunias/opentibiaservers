import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-poland');
}

export default function TfsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-poland" />;
}
