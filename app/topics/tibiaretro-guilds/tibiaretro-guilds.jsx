import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-guilds');
}

export default function TibiaretroGuildsKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-guilds" />;
}
