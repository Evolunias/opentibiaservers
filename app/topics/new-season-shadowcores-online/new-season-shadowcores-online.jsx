import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-online');
}

export default function NewSeasonShadowcoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-online" />;
}
