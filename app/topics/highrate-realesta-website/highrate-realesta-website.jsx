import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-website');
}

export default function HighrateRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-website" />;
}
