import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-ot');
}

export default function ActiveRangerSArcaniOtKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-ot" />;
}
