import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-discord-server-sweden');
}

export default function RealeraWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-with-discord-server-sweden" />;
}
