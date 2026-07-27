import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-ot');
}

export default function WithDiscordOtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-ot" />;
}
