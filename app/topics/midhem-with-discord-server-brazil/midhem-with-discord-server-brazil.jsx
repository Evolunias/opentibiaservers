import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-discord-server-brazil');
}

export default function MidhemWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-discord-server-brazil" />;
}
