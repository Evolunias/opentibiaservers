import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-shadowcores-online');
}

export default function CurrentShadowcoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-shadowcores-online" />;
}
