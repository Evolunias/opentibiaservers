import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-discord-server-usa');
}

export default function EmpirebrWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-discord-server-usa" />;
}
