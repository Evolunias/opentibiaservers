import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-rules');
}

export default function HighrateOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-rules" />;
}
