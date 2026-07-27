import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-discord');
}

export default function OfficialRangerSArcaniDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-discord" />;
}
