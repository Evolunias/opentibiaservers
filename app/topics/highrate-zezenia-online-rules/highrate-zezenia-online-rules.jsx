import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-rules');
}

export default function HighrateZezeniaOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-rules" />;
}
