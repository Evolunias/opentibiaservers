import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-online');
}

export default function KasteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="kasteria-online" />;
}
