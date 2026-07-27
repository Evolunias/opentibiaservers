import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-trailer');
}

export default function AlasteraTrailerKeywordPage() {
  return <StaticKeywordPage slug="alastera-trailer" />;
}
