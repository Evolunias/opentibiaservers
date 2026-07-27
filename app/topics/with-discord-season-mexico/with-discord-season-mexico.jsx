import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-season-mexico');
}

export default function WithDiscordSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-discord-season-mexico" />;
}
