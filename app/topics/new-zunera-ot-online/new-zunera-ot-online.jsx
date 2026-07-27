import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-online');
}

export default function NewZuneraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-online" />;
}
