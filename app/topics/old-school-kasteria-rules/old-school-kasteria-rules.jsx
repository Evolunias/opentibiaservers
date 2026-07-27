import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-kasteria-rules');
}

export default function OldSchoolKasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-kasteria-rules" />;
}
