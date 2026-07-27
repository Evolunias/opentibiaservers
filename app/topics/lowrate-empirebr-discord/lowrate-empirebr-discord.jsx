import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-discord');
}

export default function LowrateEmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-discord" />;
}
