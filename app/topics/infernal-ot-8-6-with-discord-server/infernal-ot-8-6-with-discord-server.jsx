import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-6-with-discord-server');
}

export default function InfernalOt86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-6-with-discord-server" />;
}
