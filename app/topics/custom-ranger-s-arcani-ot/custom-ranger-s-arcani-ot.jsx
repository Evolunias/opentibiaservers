import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ranger-s-arcani-ot');
}

export default function CustomRangerSArcaniOtKeywordPage() {
  return <StaticKeywordPage slug="custom-ranger-s-arcani-ot" />;
}
