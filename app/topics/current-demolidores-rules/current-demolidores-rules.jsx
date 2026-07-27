import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-rules');
}

export default function CurrentDemolidoresRulesKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-rules" />;
}
