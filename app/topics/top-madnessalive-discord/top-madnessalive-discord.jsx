import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-discord');
}

export default function TopMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-discord" />;
}
