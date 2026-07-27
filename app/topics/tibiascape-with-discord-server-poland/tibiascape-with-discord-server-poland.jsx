import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-discord-server-poland');
}

export default function TibiascapeWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-discord-server-poland" />;
}
