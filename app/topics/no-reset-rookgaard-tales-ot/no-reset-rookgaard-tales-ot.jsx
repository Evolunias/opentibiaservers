import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-ot');
}

export default function NoResetRookgaardTalesOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-ot" />;
}
