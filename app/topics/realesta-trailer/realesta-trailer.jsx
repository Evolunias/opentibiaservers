import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-trailer');
}

export default function RealestaTrailerKeywordPage() {
  return <StaticKeywordPage slug="realesta-trailer" />;
}
