import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-discord-server-mexico');
}

export default function MidhemWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-discord-server-mexico" />;
}
