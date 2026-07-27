import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-discord');
}

export default function TopTibiaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-discord" />;
}
