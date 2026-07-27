import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-fresh-start-discord');
}

export default function Tibia86FreshStartDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-fresh-start-discord" />;
}
