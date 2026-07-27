import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oldera-rules');
}

export default function NewOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-oldera-rules" />;
}
