import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-online');
}

export default function ActiveNoxiousotOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-online" />;
}
