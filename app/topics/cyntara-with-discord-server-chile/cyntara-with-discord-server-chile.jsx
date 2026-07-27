import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-discord-server-chile');
}

export default function CyntaraWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-discord-server-chile" />;
}
