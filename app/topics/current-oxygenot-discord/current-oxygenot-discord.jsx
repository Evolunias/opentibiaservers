import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-discord');
}

export default function CurrentOxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-discord" />;
}
