import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-website');
}

export default function CustomRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-website" />;
}
