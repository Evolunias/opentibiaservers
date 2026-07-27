import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-client');
}

export default function CustomRookgaardTalesClientKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-client" />;
}
