import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-madnessalive-discord');
}

export default function LowrateMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-madnessalive-discord" />;
}
