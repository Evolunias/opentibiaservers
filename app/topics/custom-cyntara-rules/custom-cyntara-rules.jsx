import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara-rules');
}

export default function CustomCyntaraRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara-rules" />;
}
