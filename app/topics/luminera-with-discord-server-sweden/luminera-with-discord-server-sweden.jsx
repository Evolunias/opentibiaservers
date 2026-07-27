import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-discord-server-sweden');
}

export default function LumineraWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-discord-server-sweden" />;
}
