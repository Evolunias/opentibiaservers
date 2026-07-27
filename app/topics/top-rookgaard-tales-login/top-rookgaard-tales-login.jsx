import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-login');
}

export default function TopRookgaardTalesLoginKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-login" />;
}
