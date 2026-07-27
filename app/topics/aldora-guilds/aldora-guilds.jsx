import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-guilds');
}

export default function AldoraGuildsKeywordPage() {
  return <StaticKeywordPage slug="aldora-guilds" />;
}
