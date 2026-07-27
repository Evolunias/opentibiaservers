import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ranger-s-arcani-discord');
}

export default function TopRangerSArcaniDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-ranger-s-arcani-discord" />;
}
