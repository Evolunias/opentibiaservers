import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-online');
}

export default function CustomShadowcoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-online" />;
}
