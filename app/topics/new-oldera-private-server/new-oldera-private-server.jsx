import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-private-server');
}

export default function NewOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-private-server" />;
}
