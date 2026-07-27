import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-tibia');
}

export default function WithDiscordOtmadnessTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-tibia" />;
}
