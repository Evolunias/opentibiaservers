import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star');
}

export default function OldSchoolNtoStarKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star" />;
}
