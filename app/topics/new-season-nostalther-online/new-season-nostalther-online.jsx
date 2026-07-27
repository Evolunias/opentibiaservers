import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-online');
}

export default function NewSeasonNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-online" />;
}
