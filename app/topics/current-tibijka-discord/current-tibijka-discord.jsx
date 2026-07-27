import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibijka-discord');
}

export default function CurrentTibijkaDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-tibijka-discord" />;
}
