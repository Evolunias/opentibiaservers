import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-discord');
}

export default function TibiaretroDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-discord" />;
}
