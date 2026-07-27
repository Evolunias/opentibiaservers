import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-login');
}

export default function RookgaardTalesLoginKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-login" />;
}
