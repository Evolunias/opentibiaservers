import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-9-6-no-reset-server');
}

export default function RookgaardTales96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-9-6-no-reset-server" />;
}
