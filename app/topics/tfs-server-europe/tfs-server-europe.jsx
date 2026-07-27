import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tfs-server-europe');
}

export default function TfsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tfs-server-europe" />;
}
