import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-discord-server-argentina');
}

export default function OtmadnessWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-discord-server-argentina" />;
}
