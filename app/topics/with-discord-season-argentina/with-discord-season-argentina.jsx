import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-season-argentina');
}

export default function WithDiscordSeasonArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-season-argentina" />;
}
