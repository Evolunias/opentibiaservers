import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('secura-guilds');
}

export default function SecuraGuildsKeywordPage() {
  return <StaticKeywordPage slug="secura-guilds" />;
}
