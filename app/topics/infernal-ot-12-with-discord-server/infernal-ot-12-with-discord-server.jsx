import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-with-discord-server');
}

export default function InfernalOt12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-with-discord-server" />;
}
