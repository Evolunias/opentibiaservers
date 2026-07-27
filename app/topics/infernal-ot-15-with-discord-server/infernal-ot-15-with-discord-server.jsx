import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-with-discord-server');
}

export default function InfernalOt15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-with-discord-server" />;
}
