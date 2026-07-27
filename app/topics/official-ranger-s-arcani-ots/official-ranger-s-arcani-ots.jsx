import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-ots');
}

export default function OfficialRangerSArcaniOtsKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-ots" />;
}
