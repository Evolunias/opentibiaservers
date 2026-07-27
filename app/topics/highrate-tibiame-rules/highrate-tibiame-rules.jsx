import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-rules');
}

export default function HighrateTibiameRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-rules" />;
}
