import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-private-server');
}

export default function CustomOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-private-server" />;
}
