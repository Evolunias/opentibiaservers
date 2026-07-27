import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-ot-server');
}

export default function NoResetRookgaardTalesOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-ot-server" />;
}
