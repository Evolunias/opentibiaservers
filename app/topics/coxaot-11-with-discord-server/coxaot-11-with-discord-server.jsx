import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-11-with-discord-server');
}

export default function Coxaot11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-11-with-discord-server" />;
}
