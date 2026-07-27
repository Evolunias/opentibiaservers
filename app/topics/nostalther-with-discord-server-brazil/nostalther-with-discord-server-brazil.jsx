import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-discord-server-brazil');
}

export default function NostaltherWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-discord-server-brazil" />;
}
