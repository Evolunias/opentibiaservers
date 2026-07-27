import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-ot');
}

export default function NewSeasonRangerSArcaniOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-ot" />;
}
