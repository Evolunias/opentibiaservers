import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-season-europe');
}

export default function OldSchoolSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="old-school-season-europe" />;
}
