import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-open-tibia');
}

export default function WithDiscordOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-open-tibia" />;
}
