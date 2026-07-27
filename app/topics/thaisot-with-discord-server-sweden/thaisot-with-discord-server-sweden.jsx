import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-discord-server-sweden');
}

export default function ThaisotWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-discord-server-sweden" />;
}
