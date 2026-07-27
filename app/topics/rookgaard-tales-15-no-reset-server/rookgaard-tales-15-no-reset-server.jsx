import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-no-reset-server');
}

export default function RookgaardTales15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-no-reset-server" />;
}
