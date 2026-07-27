import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-client');
}

export default function FreshStartRookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-client" />;
}
