import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibianus-rules');
}

export default function HighrateTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibianus-rules" />;
}
