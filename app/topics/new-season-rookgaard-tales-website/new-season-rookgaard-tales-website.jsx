import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-website');
}

export default function NewSeasonRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-website" />;
}
