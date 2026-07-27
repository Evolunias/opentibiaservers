import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-login');
}

export default function BestRookgaardTalesLoginKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-login" />;
}
