import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-season-mexico');
}

export default function OldSchoolSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="old-school-season-mexico" />;
}
