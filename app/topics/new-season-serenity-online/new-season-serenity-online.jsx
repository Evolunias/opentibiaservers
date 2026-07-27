import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-serenity-online');
}

export default function NewSeasonSerenityOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-serenity-online" />;
}
