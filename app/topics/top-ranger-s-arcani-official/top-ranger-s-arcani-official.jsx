import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ranger-s-arcani-official');
}

export default function TopRangerSArcaniOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-ranger-s-arcani-official" />;
}
