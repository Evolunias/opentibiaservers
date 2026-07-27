import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-private-server');
}

export default function PopularOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-private-server" />;
}
