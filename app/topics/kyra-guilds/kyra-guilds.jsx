import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-guilds');
}

export default function KyraGuildsKeywordPage() {
  return <StaticKeywordPage slug="kyra-guilds" />;
}
