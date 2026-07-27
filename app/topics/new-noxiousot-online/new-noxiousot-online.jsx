import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-online');
}

export default function NewNoxiousotOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-online" />;
}
