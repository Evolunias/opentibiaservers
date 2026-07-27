import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-online');
}

export default function PopularShadowcoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-online" />;
}
