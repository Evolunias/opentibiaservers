import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-discord-server-argentina');
}

export default function NostaltherWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-discord-server-argentina" />;
}
