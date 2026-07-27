import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-online');
}

export default function NepteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="neptera-online" />;
}
