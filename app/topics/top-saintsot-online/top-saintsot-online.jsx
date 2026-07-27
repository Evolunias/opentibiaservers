import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-online');
}

export default function TopSaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-online" />;
}
