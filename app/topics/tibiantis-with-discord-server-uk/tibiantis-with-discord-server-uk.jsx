import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-discord-server-uk');
}

export default function TibiantisWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-discord-server-uk" />;
}
