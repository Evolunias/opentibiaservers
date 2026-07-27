import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eternal-odyssey-website');
}

export default function WithDiscordEternalOdysseyWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eternal-odyssey-website" />;
}
