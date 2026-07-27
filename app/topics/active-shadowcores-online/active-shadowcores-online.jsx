import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-online');
}

export default function ActiveShadowcoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-online" />;
}
