import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-discord');
}

export default function NewSeasonOriginaltibiaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-discord" />;
}
