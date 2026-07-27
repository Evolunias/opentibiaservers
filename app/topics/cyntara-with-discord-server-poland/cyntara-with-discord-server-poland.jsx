import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-discord-server-poland');
}

export default function CyntaraWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-discord-server-poland" />;
}
