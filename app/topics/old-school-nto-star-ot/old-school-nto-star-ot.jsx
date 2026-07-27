import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-ot');
}

export default function OldSchoolNtoStarOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-ot" />;
}
