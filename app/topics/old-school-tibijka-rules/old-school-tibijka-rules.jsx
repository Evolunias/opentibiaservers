import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibijka-rules');
}

export default function OldSchoolTibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibijka-rules" />;
}
