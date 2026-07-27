import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-online');
}

export default function PopularNilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-online" />;
}
