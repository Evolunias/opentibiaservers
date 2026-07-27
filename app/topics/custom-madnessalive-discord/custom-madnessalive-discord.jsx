import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-discord');
}

export default function CustomMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-discord" />;
}
