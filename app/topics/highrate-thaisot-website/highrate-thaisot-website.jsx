import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-website');
}

export default function HighrateThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-website" />;
}
