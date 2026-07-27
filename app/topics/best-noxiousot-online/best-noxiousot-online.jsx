import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-noxiousot-online');
}

export default function BestNoxiousotOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-noxiousot-online" />;
}
