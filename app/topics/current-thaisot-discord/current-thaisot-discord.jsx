import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-discord');
}

export default function CurrentThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-discord" />;
}
