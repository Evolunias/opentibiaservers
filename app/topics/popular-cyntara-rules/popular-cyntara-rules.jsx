import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-rules');
}

export default function PopularCyntaraRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-rules" />;
}
