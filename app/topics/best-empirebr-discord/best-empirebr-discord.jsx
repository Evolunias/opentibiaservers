import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-discord');
}

export default function BestEmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-discord" />;
}
