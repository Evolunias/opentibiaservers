import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-online');
}

export default function BestImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-online" />;
}
