import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-online');
}

export default function CustomRubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-online" />;
}
