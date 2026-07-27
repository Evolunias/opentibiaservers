import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-online');
}

export default function BestRealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-online" />;
}
