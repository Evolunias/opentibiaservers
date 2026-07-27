import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nostalther-rules');
}

export default function OldSchoolNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-nostalther-rules" />;
}
