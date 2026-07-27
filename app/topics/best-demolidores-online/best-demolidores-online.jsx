import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-online');
}

export default function BestDemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-online" />;
}
