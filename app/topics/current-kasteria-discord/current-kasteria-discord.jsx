import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-kasteria-discord');
}

export default function CurrentKasteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-kasteria-discord" />;
}
