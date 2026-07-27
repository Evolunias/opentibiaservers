import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-trailer');
}

export default function ThaisotTrailerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-trailer" />;
}
