import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-discord-server-mexico');
}

export default function OtmadnessWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-discord-server-mexico" />;
}
