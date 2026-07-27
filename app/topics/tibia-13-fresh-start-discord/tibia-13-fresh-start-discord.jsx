import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-fresh-start-discord');
}

export default function Tibia13FreshStartDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-fresh-start-discord" />;
}
