import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-online');
}

export default function NewSeasonRubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-online" />;
}
