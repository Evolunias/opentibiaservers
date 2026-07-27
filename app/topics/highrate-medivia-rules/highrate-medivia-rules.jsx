import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-medivia-rules');
}

export default function HighrateMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-medivia-rules" />;
}
