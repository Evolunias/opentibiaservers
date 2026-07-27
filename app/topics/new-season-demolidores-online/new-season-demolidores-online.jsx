import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-online');
}

export default function NewSeasonDemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-online" />;
}
