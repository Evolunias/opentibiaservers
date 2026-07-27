import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-server');
}

export default function LowrateRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-server" />;
}
