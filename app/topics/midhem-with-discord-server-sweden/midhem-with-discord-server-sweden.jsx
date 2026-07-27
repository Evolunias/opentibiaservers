import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-discord-server-sweden');
}

export default function MidhemWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-discord-server-sweden" />;
}
