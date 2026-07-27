import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-login');
}

export default function PopularRookgaardTalesLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-login" />;
}
