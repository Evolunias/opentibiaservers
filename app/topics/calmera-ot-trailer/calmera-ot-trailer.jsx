import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-trailer');
}

export default function CalmeraOtTrailerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-trailer" />;
}
