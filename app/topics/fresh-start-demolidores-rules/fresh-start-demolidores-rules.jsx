import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-rules');
}

export default function FreshStartDemolidoresRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-rules" />;
}
