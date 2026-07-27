import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-discord-server-uk');
}

export default function OtmadnessWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-discord-server-uk" />;
}
