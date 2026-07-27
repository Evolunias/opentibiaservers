import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-season-north-america');
}

export default function WithDiscordSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-season-north-america" />;
}
