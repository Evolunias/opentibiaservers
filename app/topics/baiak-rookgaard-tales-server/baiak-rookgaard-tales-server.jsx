import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-rookgaard-tales-server');
}

export default function BaiakRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-rookgaard-tales-server" />;
}
