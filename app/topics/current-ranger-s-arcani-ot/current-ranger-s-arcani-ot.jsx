import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-ot');
}

export default function CurrentRangerSArcaniOtKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-ot" />;
}
