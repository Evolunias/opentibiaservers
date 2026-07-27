import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-7-6-with-discord-server');
}

export default function Coxaot76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-7-6-with-discord-server" />;
}
