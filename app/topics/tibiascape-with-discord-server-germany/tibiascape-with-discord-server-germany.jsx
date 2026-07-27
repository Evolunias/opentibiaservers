import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-discord-server-germany');
}

export default function TibiascapeWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-discord-server-germany" />;
}
