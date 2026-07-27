import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-server');
}

export default function PopularOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-server" />;
}
