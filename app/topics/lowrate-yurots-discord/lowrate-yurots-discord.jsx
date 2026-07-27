import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-yurots-discord');
}

export default function LowrateYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-yurots-discord" />;
}
