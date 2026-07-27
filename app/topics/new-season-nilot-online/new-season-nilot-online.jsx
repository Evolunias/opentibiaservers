import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-online');
}

export default function NewSeasonNilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-online" />;
}
