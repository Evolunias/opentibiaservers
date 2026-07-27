import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiara-discord');
}

export default function LowrateTibiaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiara-discord" />;
}
