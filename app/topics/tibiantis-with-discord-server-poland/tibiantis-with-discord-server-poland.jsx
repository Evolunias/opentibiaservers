import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-discord-server-poland');
}

export default function TibiantisWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-discord-server-poland" />;
}
