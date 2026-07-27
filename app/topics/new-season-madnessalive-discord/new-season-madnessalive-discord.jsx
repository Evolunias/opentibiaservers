import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive-discord');
}

export default function NewSeasonMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive-discord" />;
}
