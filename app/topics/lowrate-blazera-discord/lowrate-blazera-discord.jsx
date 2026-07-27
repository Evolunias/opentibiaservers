import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-discord');
}

export default function LowrateBlazeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-discord" />;
}
