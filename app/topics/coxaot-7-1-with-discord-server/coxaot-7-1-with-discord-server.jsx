import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-1-with-discord-server');
}

export default function Coxaot71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-1-with-discord-server" />;
}
