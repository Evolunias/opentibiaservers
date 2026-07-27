import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-online');
}

export default function CurrentZuneraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-online" />;
}
