import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-login');
}

export default function NoResetRookgaardTalesLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-login" />;
}
