import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-discord');
}

export default function NewSeasonArchlightDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-discord" />;
}
