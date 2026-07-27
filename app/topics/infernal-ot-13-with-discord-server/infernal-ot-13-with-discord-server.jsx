import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-with-discord-server');
}

export default function InfernalOt13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-with-discord-server" />;
}
