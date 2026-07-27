import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-discord-server-usa');
}

export default function OtmadnessWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-discord-server-usa" />;
}
