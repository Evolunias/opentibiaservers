import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-no-reset-server-france');
}

export default function RookgaardTalesNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-no-reset-server-france" />;
}
