import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-discord');
}

export default function HighrateRangerSArcaniDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-discord" />;
}
