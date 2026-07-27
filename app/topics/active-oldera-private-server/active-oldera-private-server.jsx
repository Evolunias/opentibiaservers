import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oldera-private-server');
}

export default function ActiveOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-oldera-private-server" />;
}
