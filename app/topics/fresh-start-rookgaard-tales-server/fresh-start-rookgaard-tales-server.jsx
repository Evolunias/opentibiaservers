import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-server');
}

export default function FreshStartRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-server" />;
}
