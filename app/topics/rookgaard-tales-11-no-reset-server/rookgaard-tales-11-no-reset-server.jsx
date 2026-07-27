import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-11-no-reset-server');
}

export default function RookgaardTales11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-11-no-reset-server" />;
}
