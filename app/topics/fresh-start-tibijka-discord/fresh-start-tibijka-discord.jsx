import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-discord');
}

export default function FreshStartTibijkaDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-discord" />;
}
