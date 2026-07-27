import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-8-1-with-discord-server');
}

export default function Coxaot81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-8-1-with-discord-server" />;
}
