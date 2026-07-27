import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-online');
}

export default function BestNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-online" />;
}
