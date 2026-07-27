import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-website');
}

export default function HighrateRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-website" />;
}
