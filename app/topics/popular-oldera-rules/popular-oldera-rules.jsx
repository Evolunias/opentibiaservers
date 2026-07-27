import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-rules');
}

export default function PopularOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-rules" />;
}
