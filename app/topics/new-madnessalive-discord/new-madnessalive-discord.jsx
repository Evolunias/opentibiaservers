import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive-discord');
}

export default function NewMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive-discord" />;
}
