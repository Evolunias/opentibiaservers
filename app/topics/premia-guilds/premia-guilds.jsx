import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-guilds');
}

export default function PremiaGuildsKeywordPage() {
  return <StaticKeywordPage slug="premia-guilds" />;
}
