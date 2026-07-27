import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-fresh-start-discord');
}

export default function Tibia80FreshStartDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-fresh-start-discord" />;
}
