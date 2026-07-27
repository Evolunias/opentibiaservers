import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-private-server');
}

export default function FreshStartOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-private-server" />;
}
