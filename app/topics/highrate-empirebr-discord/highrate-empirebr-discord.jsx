import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-discord');
}

export default function HighrateEmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-discord" />;
}
