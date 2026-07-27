import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-online');
}

export default function OfficialShadowcoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-online" />;
}
