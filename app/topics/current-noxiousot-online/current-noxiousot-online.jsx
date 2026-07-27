import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-online');
}

export default function CurrentNoxiousotOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-online" />;
}
