import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-rules');
}

export default function LowrateDuraOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-rules" />;
}
