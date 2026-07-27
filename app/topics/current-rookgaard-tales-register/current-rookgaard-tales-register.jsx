import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-register');
}

export default function CurrentRookgaardTalesRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-register" />;
}
