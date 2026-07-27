import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-14-no-reset-server');
}

export default function RookgaardTales14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-14-no-reset-server" />;
}
