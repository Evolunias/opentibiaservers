import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-online');
}

export default function LowrateNoxiousotOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-online" />;
}
