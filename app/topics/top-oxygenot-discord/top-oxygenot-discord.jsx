import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-discord');
}

export default function TopOxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-discord" />;
}
