import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-rules');
}

export default function ActiveCyntaraRulesKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-rules" />;
}
