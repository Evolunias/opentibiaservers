import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-fresh-start-discord');
}

export default function Tibia100FreshStartDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-fresh-start-discord" />;
}
