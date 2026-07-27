import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-rules');
}

export default function FreshStartCyntaraRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-rules" />;
}
