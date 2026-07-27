import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-discord-server-brazil');
}

export default function TibiantisWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-discord-server-brazil" />;
}
