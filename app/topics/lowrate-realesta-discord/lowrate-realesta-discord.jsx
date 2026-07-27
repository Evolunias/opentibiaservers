import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-discord');
}

export default function LowrateRealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-discord" />;
}
