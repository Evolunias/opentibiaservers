import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-fresh-start-discord');
}

export default function Tibia71FreshStartDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-fresh-start-discord" />;
}
