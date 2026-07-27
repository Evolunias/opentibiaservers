import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realesta-website');
}

export default function WithDiscordRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realesta-website" />;
}
