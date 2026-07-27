import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-baiak-server-france');
}

export default function RookgaardTalesBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-baiak-server-france" />;
}
