import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiascape-rules');
}

export default function OldSchoolTibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiascape-rules" />;
}
