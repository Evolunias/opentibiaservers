import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-discord');
}

export default function NewSeasonRangerSArcaniDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-discord" />;
}
