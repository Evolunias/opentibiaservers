import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-rules');
}

export default function PopularDemolidoresRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-rules" />;
}
