import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-register');
}

export default function TopRookgaardTalesRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-register" />;
}
