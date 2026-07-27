import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-discord');
}

export default function ActiveEmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-discord" />;
}
