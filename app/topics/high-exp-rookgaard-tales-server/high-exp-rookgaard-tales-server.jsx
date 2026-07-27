import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-rookgaard-tales-server');
}

export default function HighExpRookgaardTalesServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-rookgaard-tales-server" />;
}
