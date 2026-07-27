import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-rookgaard-tales-server');
}

export default function LowExpRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-rookgaard-tales-server" />;
}
