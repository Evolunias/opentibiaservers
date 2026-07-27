import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-4-with-discord-server');
}

export default function InfernalOt74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-4-with-discord-server" />;
}
