import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-rookgaard-tales-server');
}

export default function EvoRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="evo-rookgaard-tales-server" />;
}
