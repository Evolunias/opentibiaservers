import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-rules');
}

export default function HighrateSerenityRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-rules" />;
}
