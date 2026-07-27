import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-rules');
}

export default function BestOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-rules" />;
}
