import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-rules');
}

export default function CurrentCyntaraRulesKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-rules" />;
}
