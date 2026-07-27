import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-luminera-rules');
}

export default function HighrateLumineraRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-luminera-rules" />;
}
