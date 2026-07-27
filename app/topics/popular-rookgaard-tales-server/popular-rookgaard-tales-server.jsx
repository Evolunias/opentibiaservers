import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-server');
}

export default function PopularRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-server" />;
}
