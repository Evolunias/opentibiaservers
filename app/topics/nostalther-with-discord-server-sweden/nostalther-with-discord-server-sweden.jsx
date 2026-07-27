import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-discord-server-sweden');
}

export default function NostaltherWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-discord-server-sweden" />;
}
