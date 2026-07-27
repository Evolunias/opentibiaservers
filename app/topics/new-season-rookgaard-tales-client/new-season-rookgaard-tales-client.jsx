import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rookgaard-tales-client');
}

export default function NewSeasonRookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-rookgaard-tales-client" />;
}
