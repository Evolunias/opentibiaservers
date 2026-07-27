import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-trailer');
}

export default function MiracleTrailerKeywordPage() {
  return <StaticKeywordPage slug="miracle-trailer" />;
}
