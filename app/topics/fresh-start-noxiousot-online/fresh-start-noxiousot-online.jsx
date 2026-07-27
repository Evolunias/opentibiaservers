import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot-online');
}

export default function FreshStartNoxiousotOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot-online" />;
}
