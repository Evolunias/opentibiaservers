import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-discord-server-sweden');
}

export default function BlazeraWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-discord-server-sweden" />;
}
