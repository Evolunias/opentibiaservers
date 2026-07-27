import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-ot');
}

export default function LowrateRookgaardTalesOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-ot" />;
}
