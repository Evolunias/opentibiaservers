import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-official');
}

export default function BestRangerSArcaniOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-official" />;
}
