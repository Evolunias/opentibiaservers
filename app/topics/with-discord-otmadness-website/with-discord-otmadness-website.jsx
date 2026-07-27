import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-website');
}

export default function WithDiscordOtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-website" />;
}
