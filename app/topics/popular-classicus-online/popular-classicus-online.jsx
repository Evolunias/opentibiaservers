import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-online');
}

export default function PopularClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-online" />;
}
