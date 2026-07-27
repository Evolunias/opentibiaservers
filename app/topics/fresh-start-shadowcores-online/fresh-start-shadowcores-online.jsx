import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-shadowcores-online');
}

export default function FreshStartShadowcoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-shadowcores-online" />;
}
