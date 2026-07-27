import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-6-no-reset-server');
}

export default function RookgaardTales86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-6-no-reset-server" />;
}
