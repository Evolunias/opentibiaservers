import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-discord');
}

export default function LowrateThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-discord" />;
}
