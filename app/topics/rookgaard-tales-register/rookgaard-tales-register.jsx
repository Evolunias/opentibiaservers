import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-register');
}

export default function RookgaardTalesRegisterKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-register" />;
}
