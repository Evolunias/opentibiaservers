import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-login');
}

export default function FreshStartRookgaardTalesLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-login" />;
}
