import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-register');
}

export default function FreshStartRookgaardTalesRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-register" />;
}
