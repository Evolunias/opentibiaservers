import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-empirebr-server');
}

export default function WithDiscordEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-empirebr-server" />;
}
