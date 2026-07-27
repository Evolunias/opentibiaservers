import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-website');
}

export default function BestRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-website" />;
}
