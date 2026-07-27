import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-online');
}

export default function BestShadowcoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-online" />;
}
