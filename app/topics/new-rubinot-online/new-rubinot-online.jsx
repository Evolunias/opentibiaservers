import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-online');
}

export default function NewRubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-online" />;
}
