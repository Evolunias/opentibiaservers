import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-online');
}

export default function ActiveRubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-online" />;
}
