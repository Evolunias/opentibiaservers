import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-discord');
}

export default function FreshStartBlazeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-discord" />;
}
