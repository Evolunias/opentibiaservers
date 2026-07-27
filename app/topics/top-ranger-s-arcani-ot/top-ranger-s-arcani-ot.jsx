import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ranger-s-arcani-ot');
}

export default function TopRangerSArcaniOtKeywordPage() {
  return <StaticKeywordPage slug="top-ranger-s-arcani-ot" />;
}
