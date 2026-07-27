import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-server');
}

export default function TopRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-server" />;
}
