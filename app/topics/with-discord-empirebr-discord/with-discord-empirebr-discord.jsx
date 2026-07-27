import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-empirebr-discord');
}

export default function WithDiscordEmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-empirebr-discord" />;
}
