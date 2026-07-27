import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-discord-server-europe');
}

export default function NostaltherWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-discord-server-europe" />;
}
