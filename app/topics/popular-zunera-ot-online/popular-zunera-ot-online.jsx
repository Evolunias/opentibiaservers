import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-online');
}

export default function PopularZuneraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-online" />;
}
