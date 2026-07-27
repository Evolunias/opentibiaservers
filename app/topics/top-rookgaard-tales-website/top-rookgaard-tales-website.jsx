import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-website');
}

export default function TopRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-website" />;
}
