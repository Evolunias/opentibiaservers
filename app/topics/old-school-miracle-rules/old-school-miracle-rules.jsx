import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-miracle-rules');
}

export default function OldSchoolMiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="old-school-miracle-rules" />;
}
