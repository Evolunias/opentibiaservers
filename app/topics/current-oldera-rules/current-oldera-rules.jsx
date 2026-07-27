import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-rules');
}

export default function CurrentOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-rules" />;
}
