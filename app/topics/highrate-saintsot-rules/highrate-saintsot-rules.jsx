import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-rules');
}

export default function HighrateSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-rules" />;
}
