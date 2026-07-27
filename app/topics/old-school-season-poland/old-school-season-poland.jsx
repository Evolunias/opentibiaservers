import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-season-poland');
}

export default function OldSchoolSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-season-poland" />;
}
