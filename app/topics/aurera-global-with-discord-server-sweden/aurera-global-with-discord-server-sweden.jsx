import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-discord-server-sweden');
}

export default function AureraGlobalWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-discord-server-sweden" />;
}
