import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-1-with-discord-server');
}

export default function InfernalOt81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-1-with-discord-server" />;
}
