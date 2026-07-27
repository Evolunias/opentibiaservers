import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-discord-server-sweden');
}

export default function TibianusWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-discord-server-sweden" />;
}
