import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-france-servers');
}

export default function RookgaardTalesFranceServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-france-servers" />;
}
