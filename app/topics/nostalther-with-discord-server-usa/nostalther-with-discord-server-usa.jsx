import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-discord-server-usa');
}

export default function NostaltherWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-discord-server-usa" />;
}
