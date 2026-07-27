import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-discord-server-latin-america');
}

export default function OtmadnessWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-discord-server-latin-america" />;
}
