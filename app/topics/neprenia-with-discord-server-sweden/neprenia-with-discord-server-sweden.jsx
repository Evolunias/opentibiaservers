import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-discord-server-sweden');
}

export default function NepreniaWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-discord-server-sweden" />;
}
