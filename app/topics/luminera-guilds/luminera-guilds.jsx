import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-guilds');
}

export default function LumineraGuildsKeywordPage() {
  return <StaticKeywordPage slug="luminera-guilds" />;
}
