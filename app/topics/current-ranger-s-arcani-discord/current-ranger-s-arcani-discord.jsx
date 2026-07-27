import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-discord');
}

export default function CurrentRangerSArcaniDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-discord" />;
}
