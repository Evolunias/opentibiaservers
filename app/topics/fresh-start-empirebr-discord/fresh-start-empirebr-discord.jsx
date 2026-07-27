import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-discord');
}

export default function FreshStartEmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-discord" />;
}
