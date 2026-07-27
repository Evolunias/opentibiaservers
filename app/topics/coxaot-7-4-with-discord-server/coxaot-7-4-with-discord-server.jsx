import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-4-with-discord-server');
}

export default function Coxaot74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-4-with-discord-server" />;
}
