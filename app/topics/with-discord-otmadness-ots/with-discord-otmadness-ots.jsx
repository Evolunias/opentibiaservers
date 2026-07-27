import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-ots');
}

export default function WithDiscordOtmadnessOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-ots" />;
}
