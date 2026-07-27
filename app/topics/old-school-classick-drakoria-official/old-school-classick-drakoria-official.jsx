import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-official');
}

export default function OldSchoolClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-official" />;
}
