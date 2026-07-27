import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-online');
}

export default function RubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="rubinot-online" />;
}
