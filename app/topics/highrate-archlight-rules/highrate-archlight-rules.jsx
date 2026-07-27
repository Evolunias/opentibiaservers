import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-rules');
}

export default function HighrateArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-rules" />;
}
