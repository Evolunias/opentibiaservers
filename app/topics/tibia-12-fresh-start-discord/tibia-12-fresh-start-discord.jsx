import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-fresh-start-discord');
}

export default function Tibia12FreshStartDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-fresh-start-discord" />;
}
