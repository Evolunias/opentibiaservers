import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-discord-server-poland');
}

export default function EmpirebrWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-discord-server-poland" />;
}
