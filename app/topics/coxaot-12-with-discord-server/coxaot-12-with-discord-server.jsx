import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-12-with-discord-server');
}

export default function Coxaot12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-12-with-discord-server" />;
}
