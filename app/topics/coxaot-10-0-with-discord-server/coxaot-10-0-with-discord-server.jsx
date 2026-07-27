import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-0-with-discord-server');
}

export default function Coxaot100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-0-with-discord-server" />;
}
