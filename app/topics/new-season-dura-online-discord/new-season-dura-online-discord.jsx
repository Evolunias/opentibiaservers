import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dura-online-discord');
}

export default function NewSeasonDuraOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-dura-online-discord" />;
}
