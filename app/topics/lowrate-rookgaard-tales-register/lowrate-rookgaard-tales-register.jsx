import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-register');
}

export default function LowrateRookgaardTalesRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-register" />;
}
