import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nerana-guilds');
}

export default function NeranaGuildsKeywordPage() {
  return <StaticKeywordPage slug="nerana-guilds" />;
}
