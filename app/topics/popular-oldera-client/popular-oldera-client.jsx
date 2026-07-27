import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-client');
}

export default function PopularOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-client" />;
}
