import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thornia-rules');
}

export default function OldSchoolThorniaRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-thornia-rules" />;
}
