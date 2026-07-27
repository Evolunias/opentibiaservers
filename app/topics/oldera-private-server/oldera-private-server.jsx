import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-private-server');
}

export default function OlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-private-server" />;
}
