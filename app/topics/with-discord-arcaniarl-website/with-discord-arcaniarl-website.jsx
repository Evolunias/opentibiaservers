import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-arcaniarl-website');
}

export default function WithDiscordArcaniarlWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-arcaniarl-website" />;
}
