import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-website');
}

export default function PopularRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-website" />;
}
