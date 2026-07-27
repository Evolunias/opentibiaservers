import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-website');
}

export default function HighrateArcaniarlWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-website" />;
}
