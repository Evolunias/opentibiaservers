import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales-client');
}

export default function ActiveRookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales-client" />;
}
