import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-14-with-discord-server');
}

export default function Coxaot14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-14-with-discord-server" />;
}
