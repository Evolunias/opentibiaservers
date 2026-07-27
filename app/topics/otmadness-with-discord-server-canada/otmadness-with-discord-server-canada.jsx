import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-discord-server-canada');
}

export default function OtmadnessWithDiscordServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-discord-server-canada" />;
}
