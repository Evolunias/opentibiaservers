import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-rules');
}

export default function LowrateCyntaraRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-rules" />;
}
