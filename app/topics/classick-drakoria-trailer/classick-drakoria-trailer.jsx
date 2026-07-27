import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-trailer');
}

export default function ClassickDrakoriaTrailerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-trailer" />;
}
