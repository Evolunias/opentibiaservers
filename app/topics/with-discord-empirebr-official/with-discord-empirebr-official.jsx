import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-empirebr-official');
}

export default function WithDiscordEmpirebrOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-empirebr-official" />;
}
