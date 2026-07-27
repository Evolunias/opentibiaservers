import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-trailer');
}

export default function ClassicusTrailerKeywordPage() {
  return <StaticKeywordPage slug="classicus-trailer" />;
}
