import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-9-6-with-discord-server');
}

export default function InfernalOt96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-9-6-with-discord-server" />;
}
