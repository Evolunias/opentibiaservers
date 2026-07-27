import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-no-reset-server-north-america');
}

export default function RookgaardTalesNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-no-reset-server-north-america" />;
}
