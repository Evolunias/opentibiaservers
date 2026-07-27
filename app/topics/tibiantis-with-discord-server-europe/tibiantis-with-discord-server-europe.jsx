import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-discord-server-europe');
}

export default function TibiantisWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-discord-server-europe" />;
}
