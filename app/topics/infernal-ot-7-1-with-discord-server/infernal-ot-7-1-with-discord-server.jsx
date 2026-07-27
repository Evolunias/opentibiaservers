import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-1-with-discord-server');
}

export default function InfernalOt71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-1-with-discord-server" />;
}
