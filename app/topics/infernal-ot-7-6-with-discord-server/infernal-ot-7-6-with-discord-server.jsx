import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-6-with-discord-server');
}

export default function InfernalOt76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-6-with-discord-server" />;
}
