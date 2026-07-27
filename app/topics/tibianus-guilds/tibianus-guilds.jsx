import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-guilds');
}

export default function TibianusGuildsKeywordPage() {
  return <StaticKeywordPage slug="tibianus-guilds" />;
}
