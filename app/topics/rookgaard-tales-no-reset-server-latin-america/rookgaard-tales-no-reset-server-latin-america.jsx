import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-no-reset-server-latin-america');
}

export default function RookgaardTalesNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-no-reset-server-latin-america" />;
}
