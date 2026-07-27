import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-discord');
}

export default function CurrentCarlinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-discord" />;
}
