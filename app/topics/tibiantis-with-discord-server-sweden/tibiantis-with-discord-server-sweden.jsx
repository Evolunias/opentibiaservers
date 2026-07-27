import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-discord-server-sweden');
}

export default function TibiantisWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-discord-server-sweden" />;
}
