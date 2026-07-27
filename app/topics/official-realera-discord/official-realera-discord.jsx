import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-discord');
}

export default function OfficialRealeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-realera-discord" />;
}
