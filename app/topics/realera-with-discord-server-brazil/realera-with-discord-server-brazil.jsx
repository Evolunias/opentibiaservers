import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-discord-server-brazil');
}

export default function RealeraWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-with-discord-server-brazil" />;
}
