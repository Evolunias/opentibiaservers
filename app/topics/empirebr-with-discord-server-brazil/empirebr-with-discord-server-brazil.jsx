import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-discord-server-brazil');
}

export default function EmpirebrWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-discord-server-brazil" />;
}
