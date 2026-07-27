import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-online');
}

export default function PopularThorniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-online" />;
}
