import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-online');
}

export default function ActiveZuneraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-online" />;
}
