import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-official');
}

export default function PopularRangerSArcaniOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-official" />;
}
