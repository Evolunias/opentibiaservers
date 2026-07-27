import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-1-no-reset-server');
}

export default function RookgaardTales71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-1-no-reset-server" />;
}
