import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-season-france');
}

export default function WithDiscordSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="with-discord-season-france" />;
}
