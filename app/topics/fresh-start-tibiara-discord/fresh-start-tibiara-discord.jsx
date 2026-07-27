import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-discord');
}

export default function FreshStartTibiaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-discord" />;
}
