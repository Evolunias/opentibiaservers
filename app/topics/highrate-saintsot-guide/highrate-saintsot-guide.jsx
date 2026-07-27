import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-saintsot-guide');
}

export default function HighrateSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-saintsot-guide" />;
}
