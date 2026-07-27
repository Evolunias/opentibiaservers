import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-discord-server-europe');
}

export default function EmpirebrWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-discord-server-europe" />;
}
