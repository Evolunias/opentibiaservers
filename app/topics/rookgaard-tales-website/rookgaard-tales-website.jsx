import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-website');
}

export default function RookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-website" />;
}
