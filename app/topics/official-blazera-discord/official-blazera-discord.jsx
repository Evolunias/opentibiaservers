import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-discord');
}

export default function OfficialBlazeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-discord" />;
}
