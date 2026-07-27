import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-yurots-discord');
}

export default function CurrentYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-yurots-discord" />;
}
