import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-discord');
}

export default function LowrateNilotDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-discord" />;
}
