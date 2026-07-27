import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-madnessalive-website');
}

export default function WithDiscordMadnessaliveWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-madnessalive-website" />;
}
