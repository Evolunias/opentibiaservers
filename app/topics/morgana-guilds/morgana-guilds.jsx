import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-guilds');
}

export default function MorganaGuildsKeywordPage() {
  return <StaticKeywordPage slug="morgana-guilds" />;
}
