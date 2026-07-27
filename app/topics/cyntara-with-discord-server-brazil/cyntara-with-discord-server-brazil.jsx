import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-discord-server-brazil');
}

export default function CyntaraWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-discord-server-brazil" />;
}
