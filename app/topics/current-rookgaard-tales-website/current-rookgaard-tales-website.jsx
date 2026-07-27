import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-website');
}

export default function CurrentRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-website" />;
}
