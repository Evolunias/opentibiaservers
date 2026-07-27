import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zunera-ot-online');
}

export default function FreshStartZuneraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zunera-ot-online" />;
}
