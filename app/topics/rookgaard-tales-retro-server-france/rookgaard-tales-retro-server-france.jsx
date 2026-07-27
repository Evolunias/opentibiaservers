import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-retro-server-france');
}

export default function RookgaardTalesRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-retro-server-france" />;
}
