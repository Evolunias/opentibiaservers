import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-ots');
}

export default function PopularRangerSArcaniOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-ots" />;
}
