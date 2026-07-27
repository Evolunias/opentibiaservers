import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-online');
}

export default function NoxiousotOnlineKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-online" />;
}
