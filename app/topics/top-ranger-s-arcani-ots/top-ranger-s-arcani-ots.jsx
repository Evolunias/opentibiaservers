import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ranger-s-arcani-ots');
}

export default function TopRangerSArcaniOtsKeywordPage() {
  return <StaticKeywordPage slug="top-ranger-s-arcani-ots" />;
}
