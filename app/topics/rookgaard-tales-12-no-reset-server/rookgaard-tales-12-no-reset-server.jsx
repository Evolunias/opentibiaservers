import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-12-no-reset-server');
}

export default function RookgaardTales12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-12-no-reset-server" />;
}
