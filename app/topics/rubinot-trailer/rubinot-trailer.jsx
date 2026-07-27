import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-trailer');
}

export default function RubinotTrailerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-trailer" />;
}
