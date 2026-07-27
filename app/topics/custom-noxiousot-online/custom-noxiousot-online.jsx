import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-online');
}

export default function CustomNoxiousotOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-online" />;
}
