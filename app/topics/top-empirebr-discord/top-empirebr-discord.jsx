import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-discord');
}

export default function TopEmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-discord" />;
}
