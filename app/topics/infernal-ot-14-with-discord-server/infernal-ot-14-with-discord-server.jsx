import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-14-with-discord-server');
}

export default function InfernalOt14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-14-with-discord-server" />;
}
