import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-discord');
}

export default function FreshStartRealeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-discord" />;
}
