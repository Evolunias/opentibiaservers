import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-register');
}

export default function PopularRookgaardTalesRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-register" />;
}
