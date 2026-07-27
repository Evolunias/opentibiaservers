import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria-guilds');
}

export default function ValoriaGuildsKeywordPage() {
  return <StaticKeywordPage slug="valoria-guilds" />;
}
