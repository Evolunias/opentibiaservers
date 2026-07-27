import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-online');
}

export default function PopularSaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-online" />;
}
