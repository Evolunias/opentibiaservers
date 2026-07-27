import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-online');
}

export default function FreshStartRubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-online" />;
}
