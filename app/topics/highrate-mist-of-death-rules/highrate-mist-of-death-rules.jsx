import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-mist-of-death-rules');
}

export default function HighrateMistOfDeathRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-mist-of-death-rules" />;
}
