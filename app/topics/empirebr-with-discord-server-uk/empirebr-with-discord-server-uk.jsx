import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-discord-server-uk');
}

export default function EmpirebrWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-discord-server-uk" />;
}
