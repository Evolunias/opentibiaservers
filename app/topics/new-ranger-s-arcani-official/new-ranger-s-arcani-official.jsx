import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani-official');
}

export default function NewRangerSArcaniOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani-official" />;
}
