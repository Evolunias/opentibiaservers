import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-rules');
}

export default function HighrateDuraOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-rules" />;
}
