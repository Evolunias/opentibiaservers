import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-website');
}

export default function WithDiscordNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-website" />;
}
