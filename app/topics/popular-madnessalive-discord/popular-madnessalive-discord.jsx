import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-discord');
}

export default function PopularMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-discord" />;
}
