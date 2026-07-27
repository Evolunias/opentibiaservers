import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-guilds');
}

export default function EmpirebrGuildsKeywordPage() {
  return <StaticKeywordPage slug="empirebr-guilds" />;
}
