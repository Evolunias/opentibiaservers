import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-rules');
}

export default function TopDemolidoresRulesKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-rules" />;
}
