import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-discord');
}

export default function CurrentMidhemDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-discord" />;
}
