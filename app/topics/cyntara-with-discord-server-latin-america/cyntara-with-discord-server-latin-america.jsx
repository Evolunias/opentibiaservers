import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-discord-server-latin-america');
}

export default function CyntaraWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-discord-server-latin-america" />;
}
