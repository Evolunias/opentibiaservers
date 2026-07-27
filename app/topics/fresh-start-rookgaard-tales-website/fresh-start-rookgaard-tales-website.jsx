import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-website');
}

export default function FreshStartRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-website" />;
}
