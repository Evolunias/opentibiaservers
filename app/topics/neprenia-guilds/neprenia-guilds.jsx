import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-guilds');
}

export default function NepreniaGuildsKeywordPage() {
  return <StaticKeywordPage slug="neprenia-guilds" />;
}
