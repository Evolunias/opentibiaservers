import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-season-canada');
}

export default function WithDiscordSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-season-canada" />;
}
