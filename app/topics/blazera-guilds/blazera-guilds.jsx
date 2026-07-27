import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-guilds');
}

export default function BlazeraGuildsKeywordPage() {
  return <StaticKeywordPage slug="blazera-guilds" />;
}
