import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dura-online');
}

export default function NewSeasonDuraOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-dura-online" />;
}
