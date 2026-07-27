import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-online');
}

export default function NewSeasonAmeriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-online" />;
}
