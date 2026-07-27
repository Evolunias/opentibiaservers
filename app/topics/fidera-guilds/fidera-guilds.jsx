import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-guilds');
}

export default function FideraGuildsKeywordPage() {
  return <StaticKeywordPage slug="fidera-guilds" />;
}
