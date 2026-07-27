import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-ots');
}

export default function NoResetRookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-ots" />;
}
