import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-rules');
}

export default function OldSchoolClassickDrakoriaRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-rules" />;
}
