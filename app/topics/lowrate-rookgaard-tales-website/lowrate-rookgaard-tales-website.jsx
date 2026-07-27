import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-website');
}

export default function LowrateRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-website" />;
}
