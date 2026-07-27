import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-discord');
}

export default function Tibia74ServerDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-discord" />;
}
