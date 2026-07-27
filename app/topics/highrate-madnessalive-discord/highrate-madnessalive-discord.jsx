import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-discord');
}

export default function HighrateMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-discord" />;
}
