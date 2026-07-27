import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-1-no-reset-server');
}

export default function RookgaardTales81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-1-no-reset-server" />;
}
