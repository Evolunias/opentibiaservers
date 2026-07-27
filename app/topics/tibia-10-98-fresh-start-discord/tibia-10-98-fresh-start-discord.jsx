import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-fresh-start-discord');
}

export default function Tibia1098FreshStartDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-fresh-start-discord" />;
}
