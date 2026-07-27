import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-website');
}

export default function WithDiscordCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-website" />;
}
