import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-discord');
}

export default function NoResetEmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-discord" />;
}
