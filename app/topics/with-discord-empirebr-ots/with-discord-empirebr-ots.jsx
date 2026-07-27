import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-empirebr-ots');
}

export default function WithDiscordEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-empirebr-ots" />;
}
