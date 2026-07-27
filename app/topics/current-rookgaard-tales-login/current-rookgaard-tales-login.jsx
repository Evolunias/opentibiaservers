import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-login');
}

export default function CurrentRookgaardTalesLoginKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-login" />;
}
