import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('celesta-guilds');
}

export default function CelestaGuildsKeywordPage() {
  return <StaticKeywordPage slug="celesta-guilds" />;
}
