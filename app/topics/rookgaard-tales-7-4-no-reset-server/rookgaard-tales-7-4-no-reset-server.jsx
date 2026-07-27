import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-4-no-reset-server');
}

export default function RookgaardTales74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-4-no-reset-server" />;
}
