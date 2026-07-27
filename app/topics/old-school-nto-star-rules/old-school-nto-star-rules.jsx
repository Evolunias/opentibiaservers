import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-rules');
}

export default function OldSchoolNtoStarRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-rules" />;
}
