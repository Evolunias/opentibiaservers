import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eternal-odyssey-discord');
}

export default function OfficialEternalOdysseyDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-eternal-odyssey-discord" />;
}
