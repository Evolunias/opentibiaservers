import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-server');
}

export default function CurrentRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-server" />;
}
