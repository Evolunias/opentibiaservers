import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-13-with-discord-server');
}

export default function Coxaot13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-13-with-discord-server" />;
}
