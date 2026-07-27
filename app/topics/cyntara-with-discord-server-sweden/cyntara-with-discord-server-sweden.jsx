import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-discord-server-sweden');
}

export default function CyntaraWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-discord-server-sweden" />;
}
