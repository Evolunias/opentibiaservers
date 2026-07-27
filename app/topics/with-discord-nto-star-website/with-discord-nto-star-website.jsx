import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nto-star-website');
}

export default function WithDiscordNtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nto-star-website" />;
}
