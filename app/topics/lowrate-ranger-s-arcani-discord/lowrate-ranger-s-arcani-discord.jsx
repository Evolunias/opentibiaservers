import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-discord');
}

export default function LowrateRangerSArcaniDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-discord" />;
}
