import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-rules');
}

export default function HighrateTibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-rules" />;
}
