import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-season-usa');
}

export default function WithDiscordSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-season-usa" />;
}
