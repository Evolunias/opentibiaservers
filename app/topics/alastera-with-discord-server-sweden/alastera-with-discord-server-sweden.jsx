import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-discord-server-sweden');
}

export default function AlasteraWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-discord-server-sweden" />;
}
