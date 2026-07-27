import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('inferna-guilds');
}

export default function InfernaGuildsKeywordPage() {
  return <StaticKeywordPage slug="inferna-guilds" />;
}
