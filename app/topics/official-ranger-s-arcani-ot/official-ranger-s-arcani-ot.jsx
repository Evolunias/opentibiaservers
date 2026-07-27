import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-ot');
}

export default function OfficialRangerSArcaniOtKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-ot" />;
}
