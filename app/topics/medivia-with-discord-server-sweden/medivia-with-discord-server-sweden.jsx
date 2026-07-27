import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-discord-server-sweden');
}

export default function MediviaWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-discord-server-sweden" />;
}
