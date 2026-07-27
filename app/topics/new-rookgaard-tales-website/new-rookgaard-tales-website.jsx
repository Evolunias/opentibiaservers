import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-website');
}

export default function NewRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-website" />;
}
