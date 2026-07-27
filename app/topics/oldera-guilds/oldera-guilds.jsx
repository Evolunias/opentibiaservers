import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-guilds');
}

export default function OlderaGuildsKeywordPage() {
  return <StaticKeywordPage slug="oldera-guilds" />;
}
