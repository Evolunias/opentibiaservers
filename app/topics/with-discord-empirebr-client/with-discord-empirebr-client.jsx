import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-empirebr-client');
}

export default function WithDiscordEmpirebrClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-empirebr-client" />;
}
