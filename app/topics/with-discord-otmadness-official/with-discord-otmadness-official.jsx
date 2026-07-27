import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-official');
}

export default function WithDiscordOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-official" />;
}
