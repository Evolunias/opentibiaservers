import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-rules');
}

export default function HighrateBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-rules" />;
}
