import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-0-with-discord-server');
}

export default function InfernalOt100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-0-with-discord-server" />;
}
