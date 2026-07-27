import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-discord');
}

export default function OfficialEmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-discord" />;
}
