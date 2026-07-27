import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-official');
}

export default function OfficialRangerSArcaniOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-official" />;
}
