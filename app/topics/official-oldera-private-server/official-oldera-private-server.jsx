import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-private-server');
}

export default function OfficialOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-private-server" />;
}
