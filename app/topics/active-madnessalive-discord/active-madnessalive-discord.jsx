import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-discord');
}

export default function ActiveMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-discord" />;
}
