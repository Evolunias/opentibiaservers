import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-discord');
}

export default function CurrentEmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-discord" />;
}
