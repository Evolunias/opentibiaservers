import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-discord');
}

export default function CurrentRealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-discord" />;
}
