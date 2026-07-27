import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-discord');
}

export default function CurrentMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-discord" />;
}
