import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-shadowcores-online');
}

export default function LowrateShadowcoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-shadowcores-online" />;
}
