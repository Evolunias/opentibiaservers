import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-10-0-no-reset-server');
}

export default function RookgaardTales100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-10-0-no-reset-server" />;
}
