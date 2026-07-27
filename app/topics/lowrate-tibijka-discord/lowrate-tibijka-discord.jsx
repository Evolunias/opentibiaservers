import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibijka-discord');
}

export default function LowrateTibijkaDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibijka-discord" />;
}
