import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-rules');
}

export default function HighrateNepreniaRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-rules" />;
}
