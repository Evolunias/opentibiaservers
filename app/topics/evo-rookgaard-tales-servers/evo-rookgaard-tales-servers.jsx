import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-rookgaard-tales-servers');
}

export default function EvoRookgaardTalesServersKeywordPage() {
  return <StaticKeywordPage slug="evo-rookgaard-tales-servers" />;
}
