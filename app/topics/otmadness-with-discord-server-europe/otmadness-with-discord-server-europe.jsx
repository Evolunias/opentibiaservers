import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-discord-server-europe');
}

export default function OtmadnessWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-discord-server-europe" />;
}
