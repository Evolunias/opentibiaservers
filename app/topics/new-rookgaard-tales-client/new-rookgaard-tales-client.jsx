import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-client');
}

export default function NewRookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-client" />;
}
