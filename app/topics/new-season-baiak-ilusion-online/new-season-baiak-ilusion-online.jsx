import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-baiak-ilusion-online');
}

export default function NewSeasonBaiakIlusionOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-baiak-ilusion-online" />;
}
