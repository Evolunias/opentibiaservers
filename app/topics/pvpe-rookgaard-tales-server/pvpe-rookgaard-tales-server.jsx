import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-rookgaard-tales-server');
}

export default function PvpeRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-rookgaard-tales-server" />;
}
