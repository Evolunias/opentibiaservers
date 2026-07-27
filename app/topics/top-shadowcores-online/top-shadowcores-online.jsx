import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-shadowcores-online');
}

export default function TopShadowcoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-shadowcores-online" />;
}
