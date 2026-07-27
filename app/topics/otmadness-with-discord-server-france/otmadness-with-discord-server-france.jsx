import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-discord-server-france');
}

export default function OtmadnessWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-discord-server-france" />;
}
