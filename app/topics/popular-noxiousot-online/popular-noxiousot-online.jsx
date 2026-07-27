import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-online');
}

export default function PopularNoxiousotOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-online" />;
}
