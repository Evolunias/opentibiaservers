import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaorigins-rules');
}

export default function OldSchoolTibiaoriginsRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaorigins-rules" />;
}
