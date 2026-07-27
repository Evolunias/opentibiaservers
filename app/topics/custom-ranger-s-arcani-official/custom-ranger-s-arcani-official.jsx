import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ranger-s-arcani-official');
}

export default function CustomRangerSArcaniOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-ranger-s-arcani-official" />;
}
