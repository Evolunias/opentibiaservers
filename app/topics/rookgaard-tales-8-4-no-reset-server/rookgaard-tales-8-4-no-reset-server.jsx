import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-4-no-reset-server');
}

export default function RookgaardTales84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-4-no-reset-server" />;
}
