import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-rules');
}

export default function NewCyntaraRulesKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-rules" />;
}
