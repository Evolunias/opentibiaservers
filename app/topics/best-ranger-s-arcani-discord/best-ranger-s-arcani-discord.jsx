import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-discord');
}

export default function BestRangerSArcaniDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-discord" />;
}
