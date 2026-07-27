import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales-website');
}

export default function ActiveRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales-website" />;
}
