import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-rules');
}

export default function HighrateTibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-rules" />;
}
