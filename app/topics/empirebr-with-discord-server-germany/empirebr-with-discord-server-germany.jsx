import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-discord-server-germany');
}

export default function EmpirebrWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-discord-server-germany" />;
}
