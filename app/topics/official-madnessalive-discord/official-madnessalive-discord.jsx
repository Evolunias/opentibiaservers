import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-madnessalive-discord');
}

export default function OfficialMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-madnessalive-discord" />;
}
