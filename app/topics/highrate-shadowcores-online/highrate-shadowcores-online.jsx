import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-online');
}

export default function HighrateShadowcoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-online" />;
}
