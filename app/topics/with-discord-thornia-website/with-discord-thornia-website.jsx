import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-website');
}

export default function WithDiscordThorniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-website" />;
}
