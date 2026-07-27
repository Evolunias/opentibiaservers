import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-ot');
}

export default function PopularRangerSArcaniOtKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-ot" />;
}
