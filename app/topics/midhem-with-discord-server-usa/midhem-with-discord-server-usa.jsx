import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-discord-server-usa');
}

export default function MidhemWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-discord-server-usa" />;
}
