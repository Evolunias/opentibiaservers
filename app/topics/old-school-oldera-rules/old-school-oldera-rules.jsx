import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oldera-rules');
}

export default function OldSchoolOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-oldera-rules" />;
}
