import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-season-germany');
}

export default function WithDiscordSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-discord-season-germany" />;
}
