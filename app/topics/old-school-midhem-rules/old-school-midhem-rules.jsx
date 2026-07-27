import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-midhem-rules');
}

export default function OldSchoolMidhemRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-midhem-rules" />;
}
