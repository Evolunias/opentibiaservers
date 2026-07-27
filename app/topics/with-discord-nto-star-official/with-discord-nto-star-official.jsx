import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nto-star-official');
}

export default function WithDiscordNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nto-star-official" />;
}
