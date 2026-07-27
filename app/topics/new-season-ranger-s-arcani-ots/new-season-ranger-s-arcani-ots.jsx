import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-ots');
}

export default function NewSeasonRangerSArcaniOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-ots" />;
}
