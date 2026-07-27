import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-empirebr-rules');
}

export default function WithDiscordEmpirebrRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-empirebr-rules" />;
}
