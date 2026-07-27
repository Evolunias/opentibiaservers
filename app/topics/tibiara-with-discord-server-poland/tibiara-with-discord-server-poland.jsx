import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-discord-server-poland');
}

export default function TibiaraWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-discord-server-poland" />;
}
