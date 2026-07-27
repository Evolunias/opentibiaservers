import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-fresh-start-discord');
}

export default function Tibia84FreshStartDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-fresh-start-discord" />;
}
