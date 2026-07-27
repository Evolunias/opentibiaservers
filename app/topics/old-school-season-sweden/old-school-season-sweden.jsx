import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-season-sweden');
}

export default function OldSchoolSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="old-school-season-sweden" />;
}
