import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria-website');
}

export default function HighrateClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria-website" />;
}
