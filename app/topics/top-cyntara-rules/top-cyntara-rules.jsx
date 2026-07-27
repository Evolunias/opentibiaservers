import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-rules');
}

export default function TopCyntaraRulesKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-rules" />;
}
