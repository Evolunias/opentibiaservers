import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rookgaard-tales-register');
}

export default function NoResetRookgaardTalesRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rookgaard-tales-register" />;
}
