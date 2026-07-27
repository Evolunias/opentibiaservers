import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-with-discord-server');
}

export default function InfernalOt11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-with-discord-server" />;
}
