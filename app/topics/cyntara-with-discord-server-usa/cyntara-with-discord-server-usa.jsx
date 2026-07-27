import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-discord-server-usa');
}

export default function CyntaraWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-discord-server-usa" />;
}
