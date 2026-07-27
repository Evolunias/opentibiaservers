import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-discord');
}

export default function EmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="empirebr-discord" />;
}
