import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-online');
}

export default function TopNoxiousotOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-online" />;
}
