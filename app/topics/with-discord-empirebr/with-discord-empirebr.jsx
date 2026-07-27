import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-empirebr');
}

export default function WithDiscordEmpirebrKeywordPage() {
  return <StaticKeywordPage slug="with-discord-empirebr" />;
}
