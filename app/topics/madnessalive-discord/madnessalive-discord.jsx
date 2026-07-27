import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-discord');
}

export default function MadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-discord" />;
}
