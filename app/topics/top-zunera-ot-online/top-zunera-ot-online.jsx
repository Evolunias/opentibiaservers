import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-online');
}

export default function TopZuneraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-online" />;
}
