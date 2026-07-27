import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-online');
}

export default function PopularNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-online" />;
}
