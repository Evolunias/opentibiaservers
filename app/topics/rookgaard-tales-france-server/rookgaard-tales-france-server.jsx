import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-france-server');
}

export default function RookgaardTalesFranceServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-france-server" />;
}
