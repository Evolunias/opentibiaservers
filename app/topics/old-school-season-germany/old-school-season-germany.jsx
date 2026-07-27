import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-season-germany');
}

export default function OldSchoolSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="old-school-season-germany" />;
}
