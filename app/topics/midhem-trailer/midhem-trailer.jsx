import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-trailer');
}

export default function MidhemTrailerKeywordPage() {
  return <StaticKeywordPage slug="midhem-trailer" />;
}
