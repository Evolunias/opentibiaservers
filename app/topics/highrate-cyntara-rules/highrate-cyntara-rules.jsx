import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-rules');
}

export default function HighrateCyntaraRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-rules" />;
}
