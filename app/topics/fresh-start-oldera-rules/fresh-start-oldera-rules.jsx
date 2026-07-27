import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-rules');
}

export default function FreshStartOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-rules" />;
}
