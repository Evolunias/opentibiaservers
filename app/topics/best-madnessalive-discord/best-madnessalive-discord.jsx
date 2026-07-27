import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-discord');
}

export default function BestMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-discord" />;
}
