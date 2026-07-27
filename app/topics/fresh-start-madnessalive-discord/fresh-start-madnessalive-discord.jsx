import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-discord');
}

export default function FreshStartMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-discord" />;
}
