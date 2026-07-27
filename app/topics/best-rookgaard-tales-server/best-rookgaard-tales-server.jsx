import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-server');
}

export default function BestRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-server" />;
}
