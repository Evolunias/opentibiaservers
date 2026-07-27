import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zunera-ot-online');
}

export default function BestZuneraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-zunera-ot-online" />;
}
