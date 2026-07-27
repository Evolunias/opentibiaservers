import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-with-discord-server-france');
}

export default function EmpirebrWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-with-discord-server-france" />;
}
