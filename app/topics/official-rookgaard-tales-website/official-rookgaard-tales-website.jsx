import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rookgaard-tales-website');
}

export default function OfficialRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-rookgaard-tales-website" />;
}
