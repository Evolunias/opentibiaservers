import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-discord');
}

export default function PopularEmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-discord" />;
}
