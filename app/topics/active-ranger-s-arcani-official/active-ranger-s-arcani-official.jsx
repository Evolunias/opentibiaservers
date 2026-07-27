import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-official');
}

export default function ActiveRangerSArcaniOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-official" />;
}
