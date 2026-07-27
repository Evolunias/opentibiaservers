import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-ots');
}

export default function OldSchoolNtoStarOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-ots" />;
}
