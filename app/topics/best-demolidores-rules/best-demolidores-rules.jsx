import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-rules');
}

export default function BestDemolidoresRulesKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-rules" />;
}
