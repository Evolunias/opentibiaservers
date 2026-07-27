import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-guilds');
}

export default function InfernalOtGuildsKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-guilds" />;
}
