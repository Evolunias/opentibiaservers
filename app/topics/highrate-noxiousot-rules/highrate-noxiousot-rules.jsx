import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-rules');
}

export default function HighrateNoxiousotRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-rules" />;
}
