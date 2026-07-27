import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-0-no-reset-server');
}

export default function RookgaardTales80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-0-no-reset-server" />;
}
