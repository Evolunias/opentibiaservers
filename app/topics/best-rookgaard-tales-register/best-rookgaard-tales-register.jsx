import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-register');
}

export default function BestRookgaardTalesRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-register" />;
}
