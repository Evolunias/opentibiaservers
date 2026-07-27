import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-sabrehaven-rules');
}

export default function HighrateSabrehavenRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-sabrehaven-rules" />;
}
