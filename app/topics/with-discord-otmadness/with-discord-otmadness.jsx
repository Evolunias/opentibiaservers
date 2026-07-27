import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness');
}

export default function WithDiscordOtmadnessKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness" />;
}
