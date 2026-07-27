import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-ots');
}

export default function LowrateRookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-ots" />;
}
