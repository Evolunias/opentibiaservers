import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-discord-server-latin-america');
}

export default function EmpirebrWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-discord-server-latin-america" />;
}
