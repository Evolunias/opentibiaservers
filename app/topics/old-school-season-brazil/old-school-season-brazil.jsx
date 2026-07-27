import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-season-brazil');
}

export default function OldSchoolSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="old-school-season-brazil" />;
}
