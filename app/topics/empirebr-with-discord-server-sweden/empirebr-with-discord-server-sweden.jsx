import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-discord-server-sweden');
}

export default function EmpirebrWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-discord-server-sweden" />;
}
