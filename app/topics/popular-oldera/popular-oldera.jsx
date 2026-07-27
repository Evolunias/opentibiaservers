import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera');
}

export default function PopularOlderaKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera" />;
}
