import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-discord-server-poland');
}

export default function OtmadnessWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-discord-server-poland" />;
}
