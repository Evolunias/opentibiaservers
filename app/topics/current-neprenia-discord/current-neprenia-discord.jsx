import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-discord');
}

export default function CurrentNepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-discord" />;
}
