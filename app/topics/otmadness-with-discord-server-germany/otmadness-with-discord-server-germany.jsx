import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-discord-server-germany');
}

export default function OtmadnessWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-discord-server-germany" />;
}
