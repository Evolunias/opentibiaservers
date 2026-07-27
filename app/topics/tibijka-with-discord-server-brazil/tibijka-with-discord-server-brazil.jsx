import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-discord-server-brazil');
}

export default function TibijkaWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-discord-server-brazil" />;
}
