import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-discord-server-argentina');
}

export default function MidhemWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-discord-server-argentina" />;
}
