import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-madnessalive-discord');
}

export default function NoResetMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-madnessalive-discord" />;
}
