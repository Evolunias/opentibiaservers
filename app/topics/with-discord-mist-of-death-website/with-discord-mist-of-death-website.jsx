import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-mist-of-death-website');
}

export default function WithDiscordMistOfDeathWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-mist-of-death-website" />;
}
