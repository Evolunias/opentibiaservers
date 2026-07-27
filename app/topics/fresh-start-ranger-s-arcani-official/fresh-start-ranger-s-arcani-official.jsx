import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ranger-s-arcani-official');
}

export default function FreshStartRangerSArcaniOfficialKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ranger-s-arcani-official" />;
}
