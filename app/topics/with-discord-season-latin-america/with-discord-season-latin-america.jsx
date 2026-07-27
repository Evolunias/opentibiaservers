import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-season-latin-america');
}

export default function WithDiscordSeasonLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-season-latin-america" />;
}
